PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_users` (
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
	`photo` text,
	`job` text NOT NULL,
	`routine` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_users`("id", "name", "email", "age", "phone", "address", "city", "state", "contacts", "first_pet", "pet_budget", "photo", "job", "routine") SELECT "id", "name", "email", "age", "phone", "address", "city", "state", "contacts", "first_pet", "pet_budget", "photo", "job", "routine" FROM `users`;--> statement-breakpoint
DROP TABLE `users`;--> statement-breakpoint
ALTER TABLE `__new_users` RENAME TO `users`;--> statement-breakpoint
PRAGMA foreign_keys=ON;