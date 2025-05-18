import { colorPallette } from "@/constants/colors";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

interface LabelInputProps {
    type: InputType;
    title: string;
    name: string;
    placeholder: string;
    value: any;
    onChange: (name: any, value: any) => void;
    isUnitVisible?: boolean;
    initialValue?: any;
}

export type InputType =
    | "text"
    | "email"
    | "password"
    | "numeric"
    | "phone"
    | "decimal"
    | "datetime";

const TextAreaInput: React.FC<LabelInputProps> = ({
    isUnitVisible = false,
    ...props
}) => {
    const [value, setValue] = useState(props.initialValue);

    const handleChangeText = (text) => {
        props.onChange(props.name, text);
        setValue(text);
        console.log(value);
    };

    return (
        <View className="flex flex-col">
            <Text className="text-sm font-readexSemiBold">{props.title}</Text>
            <View
                style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    borderWidth: 0.5,
                    borderColor: colorPallette.secondary,
                    borderRadius: 4,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                }}
            >
                <View className="flex flex-col">
                    <TextInput
                        textAlignVertical="top"
                        multiline
                        numberOfLines={6}
                        id={props.name}
                        value={value}
                        placeholder={props.placeholder}
                        style={{
                            flex: 1,
                            fontFamily: "ReadexPro_400Regular",
                            alignSelf: "flex-start",
                            height: "100%",
                            width: "100%",
                        }}
                        keyboardType={"default"}
                        onChangeText={handleChangeText}
                    />
                    {isUnitVisible && (
                        <Text className="font-readexRegular text-secondary">ETH</Text>
                    )}
                </View>
            </View>
        </View>
    );
};

export default TextAreaInput;