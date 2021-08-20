-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2021 at 04:08 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perjalanandinas`
--

-- --------------------------------------------------------

--
-- Table structure for table `dasar`
--

CREATE TABLE `dasar` (
  `id` int(5) NOT NULL,
  `nama_dasar` varchar(250) NOT NULL,
  `tgl_dasar` datetime NOT NULL,
  `peruntukan` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dasar`
--

INSERT INTO `dasar` (`id`, `nama_dasar`, `tgl_dasar`, `peruntukan`, `createdAt`, `updatedAt`) VALUES
(2, 'Dalam rangka kegianatan HUT RI ke 76', '2021-08-17 00:00:00', 'Memperingatin hari kemerdekaan Republik Indonesia', '2021-08-18 06:08:39', '2021-08-18 06:08:39');

-- --------------------------------------------------------

--
-- Table structure for table `jabatan`
--

CREATE TABLE `jabatan` (
  `id` int(5) NOT NULL,
  `nama_jabatan` varchar(100) NOT NULL,
  `uang_harian` decimal(16,0) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jabatan`
--

INSERT INTO `jabatan` (`id`, `nama_jabatan`, `uang_harian`, `createdAt`, `updatedAt`) VALUES
(1, 'Camat', '1500000', '2021-08-14 22:53:37', '2021-08-14 22:53:37'),
(2, 'Wakil Camat', '1200000', '2021-08-14 22:53:53', '2021-08-14 22:53:53'),
(4, 'Bendahara', '500000', '2021-08-17 12:24:46', '2021-08-17 12:24:46');

-- --------------------------------------------------------

--
-- Table structure for table `pegawai`
--

CREATE TABLE `pegawai` (
  `id` int(5) NOT NULL,
  `nik` varchar(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL,
  `alamat` varchar(150) NOT NULL,
  `no_telp` varchar(13) NOT NULL,
  `golongan` varchar(1) NOT NULL,
  `is_active` bit(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tempat`
--

CREATE TABLE `tempat` (
  `id` int(5) NOT NULL,
  `nama_tempat` varchar(100) NOT NULL,
  `tarif_tempat` decimal(16,0) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tempat`
--

INSERT INTO `tempat` (`id`, `nama_tempat`, `tarif_tempat`, `createdAt`, `updatedAt`) VALUES
(1, 'Hotel Flamboyan', '300000', '2021-08-14 21:03:25', '2021-08-14 21:41:22'),
(3, 'Hotel Ibis', '550000', '2021-08-14 21:04:06', '2021-08-14 21:04:06');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id` int(5) NOT NULL,
  `id_pegawai` int(5) NOT NULL,
  `id_jabatan` int(5) NOT NULL,
  `id_dasar` int(5) NOT NULL,
  `id_tempat` int(5) NOT NULL,
  `id_tujuan` int(5) NOT NULL,
  `tgl_berangkat` date NOT NULL,
  `tgl_kembali` date NOT NULL,
  `dalam_rangka` varchar(200) NOT NULL,
  `lamanya` varchar(2) NOT NULL,
  `createAt` datetime NOT NULL,
  `updateAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tujuan`
--

CREATE TABLE `tujuan` (
  `id` int(5) NOT NULL,
  `nama_tujuan` varchar(100) NOT NULL,
  `transport` decimal(16,0) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tujuan`
--

INSERT INTO `tujuan` (`id`, `nama_tujuan`, `transport`, `createdAt`, `updatedAt`) VALUES
(1, 'Bandung', '2500000', '2021-08-14 19:01:16', '2021-08-14 19:01:16'),
(3, 'Kebumen', '3000000', '2021-08-14 19:07:28', '2021-08-14 19:07:28'),
(4, 'Bali', '5000000', '2021-08-14 19:07:41', '2021-08-14 19:07:41'),
(5, 'Medan', '3500000', '2021-08-17 16:24:14', '2021-08-17 16:24:14'),
(7, 'Balikpapan', '3000000', '2021-08-17 16:26:06', '2021-08-17 16:37:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dasar`
--
ALTER TABLE `dasar`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jabatan`
--
ALTER TABLE `jabatan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pegawai`
--
ALTER TABLE `pegawai`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nik` (`nik`);

--
-- Indexes for table `tempat`
--
ALTER TABLE `tempat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `join dasar` (`id_dasar`),
  ADD KEY `join jabatan` (`id_jabatan`),
  ADD KEY `join pegawai` (`id_pegawai`),
  ADD KEY `join tempat` (`id_tempat`),
  ADD KEY `join tujuan` (`id_tujuan`);

--
-- Indexes for table `tujuan`
--
ALTER TABLE `tujuan`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dasar`
--
ALTER TABLE `dasar`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `jabatan`
--
ALTER TABLE `jabatan`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pegawai`
--
ALTER TABLE `pegawai`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tempat`
--
ALTER TABLE `tempat`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tujuan`
--
ALTER TABLE `tujuan`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD CONSTRAINT `join dasar` FOREIGN KEY (`id_dasar`) REFERENCES `dasar` (`id`),
  ADD CONSTRAINT `join jabatan` FOREIGN KEY (`id_jabatan`) REFERENCES `jabatan` (`id`),
  ADD CONSTRAINT `join pegawai` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id`),
  ADD CONSTRAINT `join tempat` FOREIGN KEY (`id_tempat`) REFERENCES `tempat` (`id`),
  ADD CONSTRAINT `join tujuan` FOREIGN KEY (`id_tujuan`) REFERENCES `tujuan` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
