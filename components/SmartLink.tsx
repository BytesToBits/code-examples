import { Link as NormalLink } from "@chakra-ui/layout";
import { useRouter } from "next/router";

type SmartLinkProps = {
	to: string
	children?: any
	[key: string]: any
}

export default function SmartLink({ to, children, ...rest }: SmartLinkProps) {
	const router = useRouter();

	return (
		<NormalLink
			href={to}
			onClick={(e) => {
				e.preventDefault();
				router.push(to);
			}}
			{...rest}
		>
			{children}
		</NormalLink>
	);
}
