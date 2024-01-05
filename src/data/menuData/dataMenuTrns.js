// import { MdArrowDropDown, MdArrowRight } from "react-icons/md";

export const dataTrns = [
	{
		// This is an "li" element.
		title: "Transactions",
		to: "/trns",
		menu: "Trns",
		"menu-level": "1",
		// icon: <MdArrowDropDown />,

		// children: [
		// 	// The children is always a "Ul" element followed by 'li'
		// 	// {
		// 	// 	to: "/trns/feeder",
		// 	// 	menu: "Feeders",
		// 	// 	"menu-level": "2",
		// 	// 	icon: null,
		// 	// 	children: [
		// 	// 		// The children is always a "Ul" element followed by 'li'
		// 	// 		{
		// 	// 			to: "/trns/feeder/installation",
		// 	// 			menu: "Installations",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/feeder/commissioning",
		// 	// 			menu: "commissioning",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/feeder/decommissioning",
		// 	// 			menu: "Decomissioning",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/feeder/return-to-supplier",
		// 	// 			menu: "Retutn to Suppler",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/feeder/sale",
		// 	// 			menu: "Sale",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 	],
		// 	// },
		// 	// {
		// 	// 	to: "/trns/pole",
		// 	// 	menu: "Poles",
		// 	// 	"menu-level": "2",
		// 	// 	icon: null,
		// 	// 	children: [
		// 	// 		// The children is always a "Ul" element followed by 'li'
		// 	// 		{
		// 	// 			to: "/trns/pole/installation",
		// 	// 			menu: "Installations",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/pole/commissioning",
		// 	// 			menu: "commissioning",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/pole/decommissioning",
		// 	// 			menu: "Decomissioning",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/pole/audit",
		// 	// 			menu: "Audit",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/pole/inspection",
		// 	// 			menu: "Inspection",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/pole/missing",
		// 	// 			menu: "Missing",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/pole/found",
		// 	// 			menu: "Found",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/pole/return-to-supplier",
		// 	// 			menu: "Return to Suppler",
		// 	// 			"menu-level": "2",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 	],
		// 	// },
		// 	// {
		// 	// 	to: "/trns/box",
		// 	// 	menu: "Boxes",
		// 	// 	"menu-level": "2",
		// 	// 	icon: null,
		// 	// 	children: [
		// 	// 		// The children is always a "Ul" element followed by 'li'
		// 	// 		{
		// 	// 			to: "/trns/box/installation",
		// 	// 			menu: "Installations",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/box/commissioning",
		// 	// 			menu: "commissioning",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/box/decommissioning",
		// 	// 			menu: "Decomissioning",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/box/inspection",
		// 	// 			menu: "Inspection",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/box/missing",
		// 	// 			menu: "Missing",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/box/found",
		// 	// 			menu: "Found",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/box/return-to-supplier",
		// 	// 			menu: "Return To Suppler",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 		{
		// 	// 			to: "/trns/box/sale",
		// 	// 			menu: "Sale",
		// 	// 			"menu-level": "3",
		// 	// 			icon: null,
		// 	// 			children: null,
		// 	// 		},
		// 	// 	],
		// 	// },
		// 	{
		// 		to: "/trns/meter",
		// 		menu: "Meters",
		// 		"menu-level": "2",
		// 		icon: null,
		// 		children: [
		// 			// The children is always a "Ul" element followed by 'li'
		// 			// {
		// 			// 	to: "/trns/meter/installation",
		// 			// 	menu: "Installations",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/meter/commissioning",
		// 			// 	menu: "commissioning",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/meter/decommissioning",
		// 			// 	menu: "Decomissioning",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/meter/disconnection",
		// 			// 	menu: "Disconnection",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/meter/reconnection",
		// 			// 	menu: "Reconnection",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			{
		// 				to: "/trns/meter/audit",
		// 				menu: "Audit",
		// 				"menu-level": "3",
		// 				icon: null,
		// 				children: null,
		// 			},
		// 			{
		// 				to: "/trns/meter/inspection",
		// 				menu: "Inspection",
		// 				"menu-level": "3",
		// 				icon: null,
		// 				children: null,
		// 			},
		// 			{
		// 				to: "/trns/meter/tid",
		// 				menu: "tid",
		// 				"menu-level": "3",
		// 				icon: null,
		// 				children: null,
		// 			},
		// 			// {
		// 			// 	to: "/trns/meter/vending",
		// 			// 	menu: "Vending",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/meter/missing",
		// 			// 	menu: "Missing",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/meter/found",
		// 			// 	menu: "Found",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/meter/return-to-supplier",
		// 			// 	menu: "Return to Suppler",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/meter/sale",
		// 			// 	menu: "Sale",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 		],
		// 	},
		// 	{
		// 		to: "/trns/cb",
		// 		menu: "cb",
		// 		"menu-level": "2",
		// 		icon: null,
		// 		children: [
		// 			// The children is always a "Ul" element followed by 'li'
		// 			// {
		// 			// 	to: "/trns/cb/installation",
		// 			// 	menu: "Installations",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/cb/commissioning",
		// 			// 	menu: "commissioning",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/cb/decommissioning",
		// 			// 	menu: "Decomissioning",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },

		// 			// {
		// 			// 	to: "/trns/cb/missing",
		// 			// 	menu: "Missing",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/cb/found",
		// 			// 	menu: "Found",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/cb/return-to-supplier",
		// 			// 	menu: "Return to Suppler",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			{
		// 				to: "/trns/cb/audit",
		// 				menu: "Audit",
		// 				"menu-level": "3",
		// 				icon: null,
		// 				children: null,
		// 			},
		// 			{
		// 				to: "/trns/cb/inspection",
		// 				menu: "Inspection",
		// 				"menu-level": "3",
		// 				icon: null,
		// 				children: null,
		// 			},
		// 		],
		// 	},
		// 	{
		// 		to: "/trns/seal",
		// 		menu: "Seals",
		// 		"menu-level": "2",
		// 		icon: null,
		// 		children: [
		// 			// The children is always a "Ul" element followed by 'li'
		// 			// {
		// 			// 	to: "/trns/seal/installation",
		// 			// 	menu: "Installations",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/seal/commissioning",
		// 			// 	menu: "commissioning",
		// 			// 	"menu-level": "2",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/seal/decommissioning",
		// 			// 	menu: "Decomissioning",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/seal/inspection",
		// 			// 	menu: "Inspection",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/seal/missing",
		// 			// 	menu: "Missing",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			// {
		// 			// 	to: "/trns/seal/found",
		// 			// 	menu: "Found",
		// 			// 	"menu-level": "3",
		// 			// 	icon: null,
		// 			// 	children: null,
		// 			// },
		// 			{
		// 				to: "/trns/seal/Audit",
		// 				menu: "Audit",
		// 				"menu-level": "3",
		// 				icon: null,
		// 				children: null,
		// 			},
		// 			{
		// 				to: "/trns/seal/Inspection",
		// 				menu: "Inspection",
		// 				"menu-level": "3",
		// 				icon: null,
		// 				children: null,
		// 			},
		// 		],
		// 	},
		// ],
	},
];
