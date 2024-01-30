'use client'
import {useState} from 'react';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from "react-hook-form";
import {Card, CardTitle} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import '../globals.css';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email(),
  password:z.string().min(8,"Password must be 8 characters long.")
});

export default function ProfileForm(){
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
  
    console.log(values)
  }

    return (
      <div className="flex justify-center items-center" style={{backgroundColor: 'black', height: '100vh'}}>
      <Card className="w-96 p-5 ">
        <CardTitle className="text-white mb-4">Sign Up</CardTitle>
       <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField 
          control={form.control} 
          name="email" 
          render={({field}) => (
            <FormItem>
              <FormLabel className="text-white">Enter your email</FormLabel>
              <FormControl className="text-white">
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
            </FormItem>
          )}
          />
           <FormField 
          control={form.control} 
          name="password" 
          render={({field}) => (
            <FormItem>
              <FormLabel className="text-white">Enter your password</FormLabel>
              <FormControl className="text-white">
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
            </FormItem>
          )}
          />
          <Button className="bg-white hover:bg-gray-500"  type="submit">Sign Up</Button>
        </form>
       </Form>
       </Card>
       </div>
     );
    
}