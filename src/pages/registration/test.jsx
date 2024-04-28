    // import { useEffect, useState   } from 'react';
    // import axios from 'axios';
    import { useForm } from 'react-hook-form';

     const Test = () => {

      const { register, handleSubmit, formState: { errors } } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        // location.replace('/')
      };
return(

  <form onSubmit={ handleSubmit(onSubmit)} noValidate>
      <div>
        <label htmlFor='name'>Name</label>
        <input type="text" id="name" {...register('name', { required: 'name is required' })} />
        {errors.name && <div>{errors.name.message}</div>}
      </div>

       {/* <div>
        <label htmlfor="email">Email</label>
        <input type="email" id="email" {...register('email',="" {="" required:="" 'email="" is="" required',="" pattern:="" value:="" ^\s+@\s+$="" i,="" message:="" 'invalid="" email="" address'="" }="" })}="" />
        {errors.email && <div>{errors.email.message}</div>}
      </div> */}

      <div>
        <label htmlFor='password'>Password</label>
        <input type="password" id="password" {...register('password',{ required: 'password is required',
        minlength:{ value: 8, message:'password should be at least 8 characters'}})}/>
        {errors.password && <div>{errors.password.message}</div>}
      </div> 

      <button type="submit">Sign Up</button>
    </form>
        );
      }

      export default Test


