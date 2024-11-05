import { ChangeDetectionStrategy, Component, DestroyRef, HostBinding, inject } from '@angular/core';
import { injectTrpcClient } from "../../../trpc-client";
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { tap } from "rxjs";

@Component({
  selector: 'devfest-message-board-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  template: `
    <div class="flex flex-row justify-center items-center mt-20">
      <div class="w-full lg:w-1/2 bg-base-100 shadow-xl p-8">
        <div class="text-2xl uppercase">Send Message</div>
        <div class="divider"></div>
        <form [formGroup]="fg" novalidate autocomplete="off">
          <div class="form-control mb-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input id="author"
                   formControlName="author"
                   type="text"
                   class="input input-primary w-full p-2"
                   placeholder="Author"/>
            <input id="title"
                   formControlName="title"
                   type="text"
                   class="input input-primary w-full p-2"
                   placeholder="Title"/>
          </div>
          <div class="form-control">
            <textarea
              id="message"
              formControlName="message"
              class="textarea textarea-primary w-full p-2"
                      placeholder="Message">
            </textarea>
          </div>
        </form>
        <div class="flex justify-end mt-3">
          <button
            class="btn btn-primary uppercase"
            [disabled]="!fg.valid"
            (click)="onSubmit()">
            Send
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageBoardFormComponent {

  @HostBinding('class')
  readonly classes = ['w-full'];
  readonly #trpc = injectTrpcClient();
  #fb = inject(NonNullableFormBuilder);
  #router = inject(Router);
  #fg = this.#fb.group({
    author: this.#fb.control('', [Validators.required, Validators.minLength(3)]),
    title: this.#fb.control('', [Validators.required, Validators.minLength(3)]),
    message: this.#fb.control('', [Validators.required, Validators.minLength(5)])
  });
  #destroyRef = inject(DestroyRef);

  get fg() {
    return this.#fg;
  }

  onSubmit() {
    if (this.#fg.valid) {
      this.#trpc.messageBoard.add.mutate({
        author: this.#fg.controls.author.value,
        title: this.#fg.controls.title.value,
        message: this.#fg.controls.message.value,
      }).pipe(
        takeUntilDestroyed(this.#destroyRef),
        tap(() => this.#router.navigate(['/message-board'])),
      ).subscribe();
    }
  }
}
