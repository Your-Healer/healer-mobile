import { colorPallette } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useEffect, useState } from "react";
import {
    Platform,
    Text,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
} from "react-native";

interface LabelInputProps {
    type: InputType;
    title: string;
    name: string;
    placeholder: string;
    value: any;
    onChange: (name: any, value: any) => void;
    isUnitVisible?: boolean;
    initialValue?: any;
    readonly?: boolean;
}

export type InputType =
    | "text"
    | "email"
    | "password"
    | "numeric"
    | "phone"
    | "decimal"
    | "datetime";

const LabelInput: React.FC<LabelInputProps> = ({
    isUnitVisible = false,
    ...props
}) => {
    const [showDatePicker, setShowDatePicker] = useState(false);

    const [value, setValue] = useState("");

    const inputProps: Record<InputType, TextInputProps> = {
        text: { keyboardType: "default", secureTextEntry: false },
        email: { keyboardType: "email-address", secureTextEntry: false },
        password: { keyboardType: "default", secureTextEntry: true },
        numeric: { keyboardType: "numeric", secureTextEntry: false },
        phone: { keyboardType: "phone-pad", secureTextEntry: false },
        decimal: { keyboardType: "decimal-pad", secureTextEntry: false },
        datetime: {}, // Placeholder for DateTime Picker handling
    };

    const handleDateChange = (event: any, selectedDate?: Date) => {
        setShowDatePicker(Platform.OS === "ios"); // Keep the picker open on iOS
        if (selectedDate) {
            props.onChange(props.name, selectedDate);
        }
    };

    const handleChangeText = (text) => {
        const oldText = value;
        if (props.type !== "numeric") {
            props.onChange(props.name, text);
            console.log("Text sent: ", text);
            setValue(text);
        } else {
            const regex = /^[0-9]*\.?[0-9]*$/;
            if (regex.test(text) && text !== ".") {
                props.onChange(props.name, +text);
                setValue(text);
            } else {
                props.onChange(props.name, oldText);
            }
        }
    };

    return (
        <View className="flex flex-col">
            <Text className="text-sm font-readexSemiBold">{props.title}</Text>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 0.5,
                    borderColor: colorPallette.secondary,
                    borderRadius: 4,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                }}
            >
                {props.type === "datetime" ? (
                    <>
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={() => setShowDatePicker(true)}
                        >
                            <Text className="font-readexRegular text-gray-400">
                                {props.value
                                    ? new Date(props.value).toLocaleString()
                                    : props.placeholder}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                            <Ionicons
                                name="calendar-outline"
                                size={20}
                                color={colorPallette.secondary}
                            />
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker
                                value={props.value ? new Date(props.value) : new Date()}
                                mode="date"
                                display={Platform.OS === "ios" ? "inline" : "default"}
                                onChange={handleDateChange}
                            />
                        )}
                    </>
                ) : (
                    <View className="flex flex-row items-center">
                        <TextInput
                            id={props.name}
                            placeholder={props.placeholder}
                            value={value}
                            style={{
                                flex: 1,
                                fontFamily: "ReadexPro_400Regular",
                            }}
                            readOnly={props.readonly}
                            keyboardType={inputProps[props.type].keyboardType}
                            secureTextEntry={inputProps[props.type].secureTextEntry}
                            onChangeText={handleChangeText}
                        />
                        {isUnitVisible && (
                            <Text className="font-readexRegular text-secondary">ETH</Text>
                        )}
                    </View>
                )}
            </View>
        </View>
    );
};

export default LabelInput;