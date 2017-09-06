import { ToastOptions } from 'ng2-toastr';

export class MyOptions extends ToastOptions {
  showCloseButton = true;
  positionClass = 'toast-bottom-center';
}
