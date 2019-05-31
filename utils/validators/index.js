export default {
    login: {
        fields: {
            email: {
                label: 'Email of User',
                error: 'Email is not valid',
                help: 'admin@gmail.com',
                keyboardType: 'email-address'
            },
            password: {
                label: 'Your Password',
                error: 'Password incorrect',
                keyboardType: 'default',
                help: 'admin',
                secureTextEntry: true,
            }
        }
    }
}
