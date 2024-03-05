import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import SpinnerMini from "../../ui/SpinnerMini";

const Register = () => {
 const { signup, isLoading: isSigningUp } = useSignup();

 const { register, handleSubmit, reset } = useForm();
 function signUp(data) {
  signup(data);
  reset();
 }
 return (
  <>
   <Dialog.Description size="2" mb="4">
    Sign up for free.
   </Dialog.Description>

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

    <label>
     <Text as="div" size="2" mb="1" weight="bold">
      Full Name
     </Text>
     <TextField.Input
      {...register("fullName", { required: "This field is required" })}
      id='fullName'
      type='text'
      placeholder="Enter your full name"
     />
    </label>

   </Flex>

   <Flex gap="3" mt="4" justify="end">
    <Dialog.Close>
     <Button variant="soft" color="gray" >
      Cancel
     </Button>
    </Dialog.Close>

    <Button disabled={isSigningUp} onClick={handleSubmit(signUp)}>{isSigningUp ? <SpinnerMini /> : 'Sign up'}</Button>

   </Flex>
  </>
 );
};

export default Register;