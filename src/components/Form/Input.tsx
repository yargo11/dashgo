import { Input as CharkraInput, FormControl, FormLabel } from "@chakra-ui/react";

interface InputProps {
    name: string;
    label?: string;
}

export function Input({ name, label }: InputProps) {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={{ name }}>{label}</FormLabel>}

            <CharkraInput
                name={name} type="email"
                id={name}
                focusBorderColor="pink.500"
                bg="gray.900"
                variant="filled"
                _hover={{
                    bg: "gray.900"
                }}
                size="lg"
            />
        </FormControl>
    )
}