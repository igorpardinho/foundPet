CREATE TABLE `ongs` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`cnpj` text NOT NULL,
	`phone` text NOT NULL,
	`email` text NOT NULL,
	`size` text NOT NULL,
	`pre_interview` integer
);
