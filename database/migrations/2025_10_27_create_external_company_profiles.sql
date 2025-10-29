CREATE TABLE `external_company_profiles`
(
  `id` BIGINT AUTO_INCREMENT PRIMARY,
  `company_name` VARCHAR(255),
  `ico` VARCHAR(20),
  `country` VARCHAR(15),
  `reg_source` VARCHAR(255),
  `data` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
];