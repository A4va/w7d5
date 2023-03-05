import { TypeOf, z } from 'zod';

export const passCheck = z.object({
    body: z.object({
        password:z.string({
            required_error: 'PASSWORD IS REQUIRED !',
            invalid_type_error: 'IT MUST BE A STRING !'
        }),
    })
})

export type Registertypeschema = TypeOf<typeof passCheck>["body"];
