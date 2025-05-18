import { Image, StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import { Controller, Form, SubmitHandler, useForm } from 'react-hook-form'
import { SignUpForm } from '@/utils/types'

const CreateAccount = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpForm>({
        defaultValues: {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit: SubmitHandler<SignUpForm> = (data) => console.log(data)

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../assets/Logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.appName}>Your Healer</Text>
            </View>
            <View style={styles.formContainer}>
                <View>
                    <Text>First Name</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder='Your First Name'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value} />
                        )}
                        name="firstName"
                    />
                    {errors.firstName && <span>This field is required</span>}
                </View>
            </View>
            <Button title="Create Account" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}


export default CreateAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        backgroundColor: 'white',
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    appName: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 24,
    },
})