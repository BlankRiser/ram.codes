import { Sandpack } from '@codesandbox/sandpack-react';

// !TODO: Support Python later
export const Sandbox = (props: Sandboxrops) => {
	return (
		<div>
			<Sandpack
				theme={'dark'}
				template='react'
				files={{
					'/Wrapper.js': `export default () => "";`,
					'/Button.js': {
					code: `
					export default () => { 
					return <button>Hello</button> 
					};`,
						readOnly: true, // Set as non-editable, defaults to `false`
						active: true, // Set as main file, defaults to `false`
						hidden: false, // Tab visibility, defaults to `false`
					},
				}}
				options={{
					initMode: 'lazy',
					initModeObserverOptions: { rootMargin: `1000px 0px` },
					autorun: false,
					autoReload: false,
					showTabs: true,
					closableTabs: true,
					showLineNumbers: false, // default - true
					showInlineErrors: true, // default - false
					wrapContent: true, // default - false
					editorHeight: 280, // default - 300
					editorWidthPercentage: 60, // default - 50
					externalResources: ['https://cdn.tailwindcss.com'],
				}}
			/>
		</div>
	);
};

type Sandboxrops = {};
