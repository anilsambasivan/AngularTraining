import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'removeSpace' })
export class RemoveSpacePipe implements PipeTransform {
    public transform(value: string): string {
        return value.replace(/ /g,'');
    }
}