import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

const Login = () => {
 const { login, isLoading } = useLogin({ route: '/' });

 const { register, handleSubmit, reset } = useForm();
 function onSubmit(data) {
  if (!data?.email || !data?.password) return;
  login(
   { email: data?.email, password: data?.password },
   {
    onSuccess: () => {
     reset();
    },
   }
  );
 }
 return (
  <>

   <Flex direction="column" gap="3">
    <label>
     <Text as="div" size="2" mb="1" weight="bold">
      Email
     </Text>
     <TextField.Input
      {...register("email", {
       required: "This field is required",
       pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Please provide a valid email address",
       },
      })}
      id='email'
      type='text'
      placeholder="example@email.com"
     />
    </label>

    <label>
     <Text as="div" size="2" mb="1" weight="bold">
      Password
     </Text>
     <TextField.Input
      {...register("password", {
       required: "This field is required",
       minLength: {
        value: 8,
        message: "Password needs a minimum of 8 characters",
       },
      })}
      id='password'
      type='password'
      placeholder="Enter your password"
     />
    </label>
   </Flex>

   <Flex gap="3" mt="4" justify="end">
    <Dialog.Close>
     <Button variant="soft" color="gray" >
      Cancel
     </Button>
    </Dialog.Close>

    <Button disabled={isLoading} onClick={handleSubmit(onSubmit)}>{isLoading ? <SpinnerMini /> : 'Sign in'}</Button>

   </Flex>
  </>
 );
};

export default Login;