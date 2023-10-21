'use client';

import { SiBlogger, SiWorkplace } from '@icons-pack/react-simple-icons';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from '../ui/cmdk';
import { GitHub, Home, LinkedIn, Twitter } from 'iconoir-react';

const ROUTES = {
	home: '/',
	work: '/work',
	projects: '/projects',
	blog: 'blog',
	github: '/github',
	linkedin: '/linkedin',
	twitter: '/twitter',
};

export const CommandBar = () => {
	const [open, setOpen] = useState(false);

	const router = useRouter();

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, []);

	const handleRouter = (route: keyof typeof ROUTES) => {
		router.push(ROUTES[route]);
	};

	const runCommand = useCallback((command: () => unknown) => {
		setOpen(false);
		command();
	}, []);

	return (
		<>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder='Type a command or search...' />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading='Navigate '>
						<CommandItem
							onSelect={() => {
								runCommand(() => handleRouter('home'));
							}}
						>
							<Home className='mr-2 h-4 w-4' />
							<span>Home</span>
						</CommandItem>
						<CommandItem
							onSelect={() => {
								runCommand(() => handleRouter('work'));
							}}
						>
							<SiWorkplace className='mr-2 h-4 w-4' />
							<span>Work</span>
						</CommandItem>

						<CommandItem
							onSelect={() => {
								runCommand(() => handleRouter('blog'));
							}}
						>
							<SiBlogger className='mr-2 h-4 w-4' />
							<span>Blog</span>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading='Social'>
						<CommandItem
							onSelect={() => {
								runCommand(() => handleRouter('github'));
							}}
						>
							<GitHub className='mr-2 h-4 w-4' />
							<span>Github</span>
						</CommandItem>
						<CommandItem
							onSelect={() => {
								runCommand(() => handleRouter('linkedin'));
							}}
						>
							<LinkedIn className='mr-2 h-4 w-4' />
							<span>LinkedIn</span>
						</CommandItem>
						<CommandItem
							onSelect={() => {
								runCommand(() => handleRouter('twitter'));
							}}
						>
							<Twitter className='mr-2 h-4 w-4' />
							<span>Twitter</span>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
};
