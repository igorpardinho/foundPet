CREATE TABLE `pets` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`species` text NOT NULL,
	`photo` text,
	`age` integer NOT NULL,
	`gender` text NOT NULL,
	`weight` integer NOT NULL,
	`behavior` text NOT NULL,
	`vaccine` text NOT NULL,
	`castration` integer NOT NULL,
	`comorbidities` text NOT NULL,
	`accompanied` integer NOT NULL,
	`city` text NOT NULL
);
