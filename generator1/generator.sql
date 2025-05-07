-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2025 at 08:35 AM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `generator`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `aktywności`
--

CREATE TABLE `aktywności` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aktywności`
--

INSERT INTO `aktywności` (`id`, `nazwa`) VALUES
(1, 'Zrób 10 pompek'),
(2, 'Napisz komuś miły komentarz'),
(3, 'Spędź godzinę bez telefonu'),
(4, 'Przeczytaj 10 stron książki'),
(5, 'Zrób 15 przysiadów'),
(6, 'Wyjdź na spacer na 30 minut'),
(7, 'Naucz się 5 nowych słów w obcym języku'),
(8, 'Zrób porządek na biurku'),
(9, 'Wypij 2 litry wody'),
(10, 'Zaplanuj swój dzień'),
(11, 'Zadzwoń do bliskiej osoby'),
(12, 'Zrób 20 brzuszków'),
(13, 'Pomóż komuś w potrzebie'),
(14, 'Zjedz zdrowy posiłek'),
(15, 'Zrób coś kreatywnego'),
(16, 'Posprzątaj jeden pokój'),
(17, 'Zrób 5 minut medytacji'),
(18, 'Zapisz 3 rzeczy, za które jesteś wdzięczny'),
(19, 'Wyłącz telefon na godzinę'),
(20, 'Zrób coś, co odkładałeś od dawna');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `aktywności`
--
ALTER TABLE `aktywności`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aktywności`
--
ALTER TABLE `aktywności`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
