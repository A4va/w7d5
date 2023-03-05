import { TypeOf, z } from 'zod';

export const loanCheck = z.object({
    body: z.object({
        userId: z.string({
            required_error: 'userId IS REQUIRED !',
            invalid_type_error: 'IT MUST BE A STRING !'
        }),
        bookId: z.string({
            required_error: 'bookId IS REQUIRED !',
            invalid_type_error: 'IT MUST BE A STRING !'
        }),
    })
})

export type Registertypeschema = TypeOf<typeof loanCheck>["body"];