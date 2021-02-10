export const reactSelectStyles = {
    control: styles => ({
        ...styles,
        backgroundColor: 'white',
        fontSize: '13px',
        borderRadius: '3px',
        borderColor: '#ced4da',
        height: 36,
        minHeight: 36
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            fontSize: '13px',
            backgroundColor: isFocused ? '#1F87CD' : isSelected ? '#DDDDDD' : '#fff',
            color: isFocused ? '#fff' : isSelected ? '#1d1d1d' : '#1d1d1d',
            cursor: isDisabled ? 'not-allowed' : 'pointer',
        }
    },
    menu: styles => {
        return {
            ...styles,
            borderRadius: '0',
            margin: '0',
            padding: '0',
            zIndex: '200'
        }
    },
    menuList: styles => {
        return {
            ...styles,
            borderRadius: '0',
            padding: '0'
        }
    }
};