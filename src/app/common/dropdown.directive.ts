import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    private isOpen = false;

    @HostListener('click') onclick() {
        if (this.isOpen) {
            this.renderer.addClass(this.elRef.nativeElement, 'closed');
            this.renderer.removeClass(this.elRef.nativeElement, 'open');
            this.isOpen = false;
        } else {
            this.renderer.addClass(this.elRef.nativeElement, 'open');
            this.renderer.removeClass(this.elRef.nativeElement, 'closed');
            this.isOpen = true;
        }

    }

    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }
}
