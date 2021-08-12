/*
 Navicat Premium Data Transfer

 Source Server         : coderwhy
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : coderhub

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 03/12/2020 15:26:48
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for avatar
-- ----------------------------
DROP TABLE IF EXISTS `avatar`;
CREATE TABLE `avatar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) NOT NULL,
  `mimetype` varchar(30) DEFAULT NULL,
  `size` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `filename` (`filename`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of avatar
-- ----------------------------
BEGIN;
INSERT INTO `avatar` VALUES (1, '0887321313a27662912967cd7de13961', 'image/jpeg', 55362, 4, '2020-12-02 20:54:44', '2020-12-02 20:54:44');
INSERT INTO `avatar` VALUES (2, '2b377c896f7c950618cb886ecfbed8f4', 'image/jpeg', 55362, 4, '2020-12-02 21:19:45', '2020-12-02 21:19:45');
INSERT INTO `avatar` VALUES (3, '462ec58a2d7a292ef646ee70afc269e3', 'image/jpeg', 55362, 4, '2020-12-02 21:20:00', '2020-12-02 21:20:00');
INSERT INTO `avatar` VALUES (4, '5090cad66f41fb23c51c07ff694b78e9', 'image/jpeg', 55362, 4, '2020-12-02 21:24:28', '2020-12-02 21:24:28');
COMMIT;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) NOT NULL,
  `moment_id` int NOT NULL,
  `user_id` int NOT NULL,
  `comment_id` int DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `moment_id` (`moment_id`),
  KEY `user_id` (`user_id`),
  KEY `comment_id` (`comment_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of comment
-- ----------------------------
BEGIN;
INSERT INTO `comment` VALUES (4, '我就认为JavaScript才是最好的而语言', 1, 1, NULL, '2020-11-30 10:41:21', '2020-11-30 10:41:21');
INSERT INTO `comment` VALUES (5, '我就认为JavaScript才是最好的而语言', 3, 1, NULL, '2020-11-30 17:33:01', '2020-11-30 17:33:01');
INSERT INTO `comment` VALUES (6, '前端学习最重要的是HTML+CSS+JavaScript', 1, 4, NULL, '2020-11-30 20:07:15', '2020-11-30 20:07:15');
INSERT INTO `comment` VALUES (7, 'Vue、React也是非常重要~', 1, 4, 6, '2020-11-30 20:08:58', '2020-11-30 20:08:58');
COMMIT;

-- ----------------------------
-- Table structure for file
-- ----------------------------
DROP TABLE IF EXISTS `file`;
CREATE TABLE `file` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(100) NOT NULL,
  `mimetype` varchar(30) DEFAULT NULL,
  `size` int DEFAULT NULL,
  `moment_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `filename` (`filename`),
  KEY `user_id` (`user_id`),
  KEY `moment_id` (`moment_id`),
  CONSTRAINT `file_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `file_ibfk_2` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of file
-- ----------------------------
BEGIN;
INSERT INTO `file` VALUES (3, 'b710fd1b2f1d054a568e16d4fdf03245', 'image/png', 1004769, 1, 4, '2020-12-02 22:21:56', '2020-12-02 22:21:56');
INSERT INTO `file` VALUES (4, '107632322c8ed31f1901d0bfe6aca4f9', 'image/png', 726597, 1, 4, '2020-12-02 22:21:56', '2020-12-02 22:21:56');
COMMIT;

-- ----------------------------
-- Table structure for label
-- ----------------------------
DROP TABLE IF EXISTS `label`;
CREATE TABLE `label` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of label
-- ----------------------------
BEGIN;
INSERT INTO `label` VALUES (1, '前端', '2020-11-30 21:06:04', '2020-11-30 21:06:04');
INSERT INTO `label` VALUES (2, '文学', '2020-11-30 21:13:50', '2020-11-30 21:13:50');
INSERT INTO `label` VALUES (3, '爱情', '2020-11-30 21:13:53', '2020-11-30 21:13:53');
INSERT INTO `label` VALUES (4, '青春', '2020-11-30 21:14:04', '2020-11-30 21:14:04');
INSERT INTO `label` VALUES (5, 'C语言', '2020-11-30 21:35:10', '2020-11-30 21:35:10');
INSERT INTO `label` VALUES (6, '编程', '2020-11-30 21:43:19', '2020-11-30 21:43:19');
INSERT INTO `label` VALUES (7, '开发语言', '2020-11-30 21:43:19', '2020-11-30 21:43:19');
INSERT INTO `label` VALUES (8, '励志', '2020-11-30 21:54:33', '2020-11-30 21:54:33');
INSERT INTO `label` VALUES (9, '奋斗', '2020-11-30 21:54:33', '2020-11-30 21:54:33');
COMMIT;

-- ----------------------------
-- Table structure for moment
-- ----------------------------
DROP TABLE IF EXISTS `moment`;
CREATE TABLE `moment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) NOT NULL,
  `user_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `moment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of moment
-- ----------------------------
BEGIN;
INSERT INTO `moment` VALUES (1, '我说错了，C语言才是最好的语言~', 4, '2020-11-23 22:05:23', '2020-11-27 21:35:42');
INSERT INTO `moment` VALUES (3, '曾几何时，他也好，她也好，都是这家伙的被害者。所以我才憎恶着。这个强求着所谓“大家”的世界。必须建立在牺牲某人之上才能成立的低劣的和平。以温柔和正义粉饰，明明是恶毒之物却登大雅之堂，随着时间的流逝越发凶恶，除欺瞒外别无其二的空虚的概念。过去和世界都是无法改变的。发生过的事情和所谓的“大家”都是无法改变的。但是，并不是说自己只能隶属于他们', 1, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (4, '不要告诉我你不需要保护，不要告诉我你不寂寞，知微，我只希望你，在走过黑夜的那个时辰，不要倔强的选择一个人。', 3, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (5, 'If you shed tears when you miss the sun, you also miss the stars.如果你因失去了太阳而流泪，那么你也将失去群星了。', 1, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (6, '在世间万物中我都发现了你，渺小时，你是阳光下一粒种子，伟大时，你隐身在高山海洋里。', 2, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (8, '限定目的，能使人生变得简洁。', 2, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (9, '翅膀长在你的肩上，太在乎别人对于飞行姿势的批评，所以你飞不起来', 4, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (10, '一个人至少拥有一个梦想，有一个理由去坚强。心若没有栖息的地方，到哪里都是在流浪。', 2, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (11, '不乱于心，不困于情。不畏将来，不念过往。如此，安好。', 3, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (12, '如果你给我的，和你给别人的是一样的，那我就不要了。', 3, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (13, '故事的开头总是这样，适逢其会，猝不及防。故事的结局总是这样，花开两朵，天各一方。', 2, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (14, '你不愿意种花，你说，我不愿看见它一点点凋落。是的，为了避免结束，你避免了一切开始。', 2, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (15, '你如果认识从前的我，也许你会原谅现在的我。', 4, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (16, '每一个不曾起舞的日子，都是对生命的辜负。', 2, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (17, '向来缘浅，奈何情深。', 2, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (18, '心之所向 素履以往 生如逆旅 一苇以航', 3, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (19, '生如夏花之绚烂，死如秋叶之静美。', 3, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (20, '答案很长，我准备用一生的时间来回答，你准备要听了吗？', 4, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (21, '因为爱过，所以慈悲；因为懂得，所以宽容。', 4, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (22, '我们听过无数的道理，却仍旧过不好这一生。', 1, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
INSERT INTO `moment` VALUES (23, '我来不及认真地年轻，待明白过来时，只能选择认真地老去。', 2, '2020-11-23 22:21:19', '2020-11-23 22:21:19');
COMMIT;

-- ----------------------------
-- Table structure for moment_label
-- ----------------------------
DROP TABLE IF EXISTS `moment_label`;
CREATE TABLE `moment_label` (
  `moment_id` int NOT NULL,
  `label_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`moment_id`,`label_id`),
  KEY `label_id` (`label_id`),
  CONSTRAINT `moment_label_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moment_label_ibfk_2` FOREIGN KEY (`label_id`) REFERENCES `label` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of moment_label
-- ----------------------------
BEGIN;
INSERT INTO `moment_label` VALUES (1, 3, '2020-11-30 21:51:59', '2020-11-30 21:51:59');
INSERT INTO `moment_label` VALUES (1, 5, '2020-11-30 21:51:27', '2020-11-30 21:51:27');
INSERT INTO `moment_label` VALUES (1, 6, '2020-11-30 21:51:27', '2020-11-30 21:51:27');
INSERT INTO `moment_label` VALUES (1, 7, '2020-11-30 21:51:27', '2020-11-30 21:51:27');
INSERT INTO `moment_label` VALUES (9, 8, '2020-11-30 21:54:33', '2020-11-30 21:54:33');
INSERT INTO `moment_label` VALUES (9, 9, '2020-11-30 21:54:33', '2020-11-30 21:54:33');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `password` varchar(50) NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `avatar_url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, 'coderwhy', '4297f44b13955235245b2497399d7a93', '2020-11-18 22:13:07', '2020-12-01 19:09:38', NULL);
INSERT INTO `user` VALUES (2, 'kobe', '12121321', '2020-11-18 22:46:56', '2020-11-18 22:46:56', NULL);
INSERT INTO `user` VALUES (3, 'lilei', 'abc123', '2020-11-20 20:03:52', '2020-11-20 20:03:52', NULL);
INSERT INTO `user` VALUES (4, 'lucy', 'e10adc3949ba59abbe56e057f20f883e', '2020-11-20 20:19:42', '2020-12-02 21:24:29', 'http://localhost:8000/users/4/avatar');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
