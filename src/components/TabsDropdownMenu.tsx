import React, { HTMLAttributes, SelectHTMLAttributes, useState } from 'react'

export interface TabsDropdownMenuProps extends SelectHTMLAttributes<HTMLSelectElement> {
    idBook: number;
    startValue?: string;
}

const TabsDropdownMenu: React.FC<TabsDropdownMenuProps> = ({ startValue, idBook,  ...props }) => {
    const [selectedOption, setSelectedOption] = useState<string>(!startValue ? "nt" : startValue);

    const handleOptionChange = async (option: string) => {
        setSelectedOption(option);

        try {
            await fetch('/api/book/setCategory', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    selectedOption: option,
                    idBook
                })
            });
        } catch (error) {
            console.error('Ошибка отправки выбора', error);
        }
    };

    return (
        <select className='mt-4 rounded-lg border border-gray-800 p-1' {...props} value={selectedOption} onChange={(e) => handleOptionChange(e.target.value)}>
            <option value="nt">Ничего</option>
            <option value="plans">В планах</option>
            <option value="history">История</option>
            <option value="read">Читаю</option>
        </select>
    )
}

export default TabsDropdownMenu
