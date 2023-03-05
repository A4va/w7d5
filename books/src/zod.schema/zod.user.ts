import { TypeOf, z } from 'zod';

export const userCheck = z.object({
    body: z.object({
        username:z.string({
            required_error: 'USERMAN IS REQUIRED !',
            invalid_type_error: 'IT MUST BE A STRING !'
        }),
        password:z.string({
            required_error: 'PASSWORD IS REQUIRED !',
            invalid_type_error: 'IT MUST BE A STRING !'
        }),
    })
})

export type Registertypeschema = TypeOf<typeof userCheck>["body"];