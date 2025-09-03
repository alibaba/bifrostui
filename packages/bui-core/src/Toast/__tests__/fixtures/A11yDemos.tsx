import Toast from '../../FunctionalToast';

export const CalendarDemo = () => {
  const [toast] = Toast.useToast();
  toast({
    message: 'Hello World',
    duration: 0,
  });
};
