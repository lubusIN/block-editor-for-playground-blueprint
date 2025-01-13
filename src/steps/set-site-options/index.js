/**
 * WordPress dependencies.
 */
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { settings, plus, trash } from '@wordpress/icons';
import { useBlockProps } from '@wordpress/block-editor';
import {
	Placeholder,
	Button,
	Icon,
	__experimentalConfirmDialog as ConfirmDialog,
	__experimentalInputControl as InputControl,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	__experimentalText as Text,
} from '@wordpress/components';

/**
 * Internal dependencies.
 */
import metadata from './block.json';

/**
 * Edit function for the plugin installation block.
 *
 * @param {Object} props Component properties.
 * @return {Element} Element to render.
 */
function Edit({ attributes, setAttributes, isSelected }) {
	const { options } = attributes;
	const [isOpen, setIsOpen] = useState(false);
	const [optionName, setOptionName] = useState('');
	const [optionValue, setOptionValue] = useState('');
	const [optionList, updateOptionList] = useState(Object.entries(options));
	const [selectedOption, setSelectedOption] = useState(undefined);

	useEffect(() => {
		setAttributes({
			options: Object.fromEntries(optionList)
		});
	}, [optionList]);

	const addOption = () => {
		// Update list
		updateOptionList([
			...optionList,
			[optionName, optionValue]
		]);

		// Clear add form
		setOptionName('');
		setOptionValue('');
	};

	const updateOption = (index, field, fieldValue) => {
		const updated = optionList.map(([key, value], i) => {
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

		updateOptionList(updated);
	};

	const removeOption = () => {
		updateOptionList(optionList.filter((option, index) => index !== selectedOption));
	};

	return (
		<div {...useBlockProps()}>
			<Placeholder
				preview={
					<VStack style={{ width: '100%' }}>
						<HStack justify='left' align={'center'} spacing={3}>
							<Icon icon={settings} size={28} className='step-icon' />
							<VStack spacing={1}>
								<Text upperCase size={12} weight={500} color='#949494'>{metadata.title}</Text>
								{!isSelected && (
									<Text weight={600}>
										{(<pre>{JSON.stringify(options, null, " ")}</pre> || __('{config site options}', 'wp-playground-blueprint-editor'))}
									</Text>
								)}
							</VStack>
						</HStack>
						{isSelected && (
							<VStack>
								<HStack justify='left' alignment='bottom'>
									<InputControl
										label={__('Name', 'wp-playground-blueprint-editor')}
										value={optionName}
										onChange={(value) => { setOptionName(value) }}
									/>
									<InputControl
										label={__('Value', 'wp-playground-blueprint-editor')}
										value={optionValue}
										onChange={(value) => setOptionValue(value)}
									/>
									<Button
										icon={plus}
										label={__('Add Config', 'wp-playground-blueprint-editor')}
										onClick={addOption}
									/>
								</HStack>
								{options && optionList.map(([key, value], index) => {
									return (
										<HStack justify='left' key={index} alignment='bottom'>
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
												icon={trash}
												label={__('Delete Config', 'wp-playground-blueprint-editor')}
												onClick={() => {
													setSelectedOption(index);
													setIsOpen(true);
												}}
											/>
										</HStack>
									)
								})}
							</VStack>
						)}
					</VStack>
				}
			/>
			<ConfirmDialog
				isOpen={isOpen}
				onConfirm={() => {
					removeOption();
					setSelectedOption(undefined);
					setIsOpen(false);
				}}
				onCancel={() => setIsOpen(false)}
			>
				{__('Delete Option?', 'wp-playground-blueprint-editor')}
			</ConfirmDialog>
		</div>
	);
}

/**
 * Every block starts by registering a new block type definition.
 */
registerBlockType(metadata.name, {
	icon: settings,
	edit: Edit,
});
