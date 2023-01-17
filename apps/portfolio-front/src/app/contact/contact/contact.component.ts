import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'portfolio-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})
export class ContactComponent implements OnInit {
	contactForm!: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.initContactForm();
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
		this.contactForm.reset();
	}

	transformText(text: string): string {
		if (text) {
			return text.replace(/<[^>]*>/g, '');
		}
		return '';
	}
}
