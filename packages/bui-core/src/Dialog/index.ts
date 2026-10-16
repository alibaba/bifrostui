import Dialog from './Dialog';
import FunctionalDialog from './FunctionalDialog';
import { DialogComponent as DialogComponentType } from './Dialog.types';

const DialogWithMethods = Dialog as DialogComponentType;

// 挂载静态方法到主组件
DialogWithMethods.confirm = FunctionalDialog.confirm;
DialogWithMethods.prompt = FunctionalDialog.prompt;
DialogWithMethods.alert = FunctionalDialog.alert;
DialogWithMethods.useDialog = FunctionalDialog.useDialog;

// 默认导出带有静态方法的 Dialog 组件
export default DialogWithMethods;
export { DialogWithMethods as Dialog };

// 导出类型
export * from './Dialog.types';
