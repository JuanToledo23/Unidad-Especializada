import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'MoneyFormat'
})

export class MoneyFormatPipe implements PipeTransform {
    transform(numero: string): any {
        if (numero === "") { return; }
        if (numero.indexOf(".") >= 0) {
            var decimal_pos = numero.indexOf(".");
            var left_side = numero.substring(0, decimal_pos);
            var right_side = numero.substring(decimal_pos);
            left_side = this.formatNumber(left_side);
            right_side = this.formatNumber(right_side);
            right_side = right_side.substring(0, 2);
            numero = left_side + "." + right_side;

        } else {
            numero = this.formatNumber(numero);
            numero = numero;
        }
        return '$' + numero;
    }
    formatNumber(n) {
        return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}