-- Tabalky pro Link-In Kiontakt
`CREATE TABLE `linkedin_contacts`
(id BIGINT AUTO_INCREMENT PRIMARY KEY,
 `name` VARCHAR(255),
 `position` VARCHAR(255),
 `firm` VARCHAR(255),
 `email VARCHAR(255),
 `country` VARCHAR(75),
 `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Tabalky pro finiance data FIRMa
CREATE TABLE `company_financials`
(
  `id` BIGINT AUTO_INCREMENT PRRIMARY KEY,
  `company_name` VARCHAR(255) NOT NULL,
  `ico` VARCHAR(20),
  year INT,
  revenue BIGINT,
  profit BIGINT,
  `source` VARCHAR(50) DEFAULT @'justice.cz'',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);