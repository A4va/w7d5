import { TypeOf, z } from 'zod';

enum Genre { 
    admin = "admin",
    user = "user",
}

export const userCheck = z.object({
    body: z.object({
        username:z.string({
            required_error: 'NAME IS REQUIRED !',
            invalid_type_error: 'IT MUST BE A STRING !'
        }),
        email:z.string({
            required_error: 'EMAIL IS REQUIRED !',
            invalid_type_error: 'IT MUST BE A STRING !'
        }),
        role:z.nativeEnum(Genre, { required_error: "ROLE IS REQUIRED !" }),
        joiningYear: z.string({
            required_error: 'YEAR IS REQUIRED !',
            invalid_type_error: 'IT MUST BE A STRING !'
        }),
        age:z.number({
            required_error: 'AGE IS REQUIRED !',
            invalid_type_error: 'IT MUST BE A NUMBER !'
        }),
        password:z.string({
            required_error: 'PASSWORD IS REQUIRED !',
            invalid_type_error: 'IT MUST BE A STRING !'
        }),
    })
})

export type Registertypeschema = TypeOf<typeof userCheck>["body"];
