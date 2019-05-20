import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core'

@Directive({ selector: '[xHidden]'})
export class HiddenDirective implements OnInit{
   
    @Input() public xHidden: boolean;
    
    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    ngOnInit(): void {
        if(this.xHidden) {
            this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        }
    }
}