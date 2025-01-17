/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import {
    Modal,
    Button,
    __experimentalInputControl as InputControl,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
} from '@wordpress/components';


function SiteOptionsSettings({ attributes = {}, setAttributes, label = 'Edit Options' }) {
    const { siteOptions } = attributes;
    const [isModalOpen, setModalOpen] = useState(false);
    const [optionList, updateOptionList] = useState(Object.entries(siteOptions));
    const [optionName, setOptionName] = useState('');
    const [optionValue, setOptionValue] = useState('');


      // Sync local state with attributes when siteOptions updates
      useEffect(() => {
        updateOptionList(Object.entries(siteOptions || {}));
    }, [siteOptions]);
    const addOption = () => {
        if (optionName && optionValue) {
            updateOptionList([...optionList, [optionName, optionValue]]);
            setOptionName('');
            setOptionValue('');
        }
    };

    const updateOption = (index, field, value) => {
        const updatedList = optionList.map(([key, value], i) => {
			if (i === index) {
				if ('key' === field) {
					return [fieldValue, value]
				}

				if ('value' === field) {
					return [key, fieldValue]
				}
			} else {
				return [key, value];
			}
		});
        updateOptionList(updatedList);
    };

    const removeOption = () => {
		updateOptionList(optionList.filter((option, index) => index !== index));
	};

    const saveOptions = () => {
        setAttributes({ siteOptions: Object.fromEntries(optionList) });
        setModalOpen(false);
    };

    return (
        <div>
            {/* Trigger Button */}
            <Button style={{padding: '10px 0px'}} onClick={() => setModalOpen(true)}>
                {__(label, 'wp-playground-blueprint-editor')}
            </Button>

            {/* Modal */}
            {isModalOpen && (
                <Modal
                    title={__('Edit Site Options', 'wp-playground-blueprint-editor')}
                    onRequestClose={() => setModalOpen(false)}
                >
                    <VStack spacing={4}>
                        {/* Add New Option */}
                        <HStack>
                            <InputControl
                                label={__('Name', 'wp-playground-blueprint-editor')}
                                value={optionName}
                                onChange={(value) => setOptionName(value)}
                            />
                            <InputControl
                                label={__('Value', 'wp-playground-blueprint-editor')}
                                value={optionValue}
                                onChange={(value) => setOptionValue(value)}
                            />
                            <Button variant='tertiary' onClick={addOption}>
                                {__('Add Option', 'wp-playground-blueprint-editor')}
                            </Button>
                        </HStack>

                        {/* Existing Options */}
                        {optionList.map(([key, value], index) => (
                            <HStack key={index}>
                                <InputControl
                                    label={__('Name', 'wp-playground-blueprint-editor')}
                                    value={key}
                                    onChange={(value) => updateOption(index, 'key', value)}
                                />
                                <InputControl
                                    label={__('Value', 'wp-playground-blueprint-editor')}
                                    value={value}
                                    onChange={(value) => updateOption(index, 'value', value)}
                                />
                                <Button
                                    isDestructive
                                    onClick={() => removeOption(index)}
                                >
                                    {__('Delete', 'wp-playground-blueprint-editor')}
                                </Button>
                            </HStack>
                        ))}
                    </VStack>

                    {/* Modal Actions */}
                    <HStack justify="right" spacing={3}>
                        <Button onClick={() => setModalOpen(false)}>
                            {__('Cancel', 'wp-playground-blueprint-editor')}
                        </Button>
                        <Button variant='tertiary' onClick={saveOptions}>
                            {__('Save', 'wp-playground-blueprint-editor')}
                        </Button>
                    </HStack>
                </Modal>
            )}
        </div>
    );
}

export default SiteOptionsSettings;
