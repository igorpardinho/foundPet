CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`age` integer NOT NULL,
	`phone` text NOT NULL,
	`address` text NOT NULL,
	`city` text NOT NULL,
	`state` text NOT NULL,
	`contacts` text NOT NULL,
	`first_pet` integer NOT NULL,
	`pet_budget` text NOT NULL,
	`photo` text NOT NULL,
	`job` text NOT NULL,
	`routine` text NOT NULL
);
