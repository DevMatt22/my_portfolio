import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, map, of, pipe, Subscription } from 'rxjs';

@Component({
	selector: 'portfolio-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})
export class ContactComponent implements OnInit, OnDestroy {
	contactForm!: FormGroup;

	obs: Subscription = new Subscription();

	nums = of(1, 2, 3, 4, 5, 6, 7, 8, 9);

	squareOddVals = pipe(
		filter((n: number) => n % 2 !== 0),
		map((n) => n * n)
	);

	squareOdd = this.squareOddVals(this.nums);
	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.initContactForm();
		this.obs = this.squareOdd.subscribe({
			next: (x) => console.log(x),
			error: console.error,
		});
	}
	ngOnDestroy() {
		if (this.obs) {
			this.obs.unsubscribe();
		}
	}

	initContactForm(): void {
		this.contactForm = this.formBuilder.group({
			senderEmail: ['', [Validators.email, Validators.required]],
			senderObject: ['', [Validators.required]],
			senderContent: ['', [Validators.required]],
		});
	}

	onSubmitForm(): number {
		return 0;
	}

	onResetContactForm(): void {
		this.contactForm?.reset();
	}

	transformText(text: string): string {
		if (text) {
			return text.replace(/<[^>]*>/g, '');
		}
		return '';
	}
}
