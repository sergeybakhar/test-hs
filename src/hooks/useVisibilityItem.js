import { useState } from 'react';

const useVisibilityItem = initialValue => {
    const [visibilityItem, setVisibilityItem] = useState(initialValue);

    const handleCollapsibleItem = e => {
        e.stopPropagation();
        setVisibilityItem(!visibilityItem);
    }

    return [visibilityItem, handleCollapsibleItem];
};

export default useVisibilityItem;