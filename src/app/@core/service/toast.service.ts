import { NbToastrService } from '@nebular/theme';
import { Injectable } from '@angular/core';

export interface Toast {
    title: string;
    message: string;
}

@Injectable()
export class ToastService {

    constructor(private toastService: NbToastrService) {
    }

    info(data: Toast): void {
        this.toastService.info(data.message, data.title);
    }

    error(data: Toast): void {
        this.toastService.danger(data.message, data.title);
    }

    danger(data: Toast): void {
        this.toastService.danger(data.message, data.title);
    }

    success(data: Toast): void {
        this.toastService.success(data.message, data.title);
    }

    warn(data: Toast): void {
        this.toastService.warning(data.message, data.title);
    }

    created(): void {
        this.success({message: 'Record created successfully!', title: 'Created'});
    }

    updated(): void {
        this.warn({message: 'Record updated successfully!', title: 'Updated'});
    }

    notCreated(): void {
        this.error({message: 'Error while adding new record!', title: 'Error'});
    }

    deleted(): void {
        this.danger({message: 'Record deleted successfully!', title: 'Delete'});
    }
}
