import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons
} from '@expo/vector-icons';

const NotificationsScreen = () => {
  // Dữ liệu mẫu thông báo
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      type: 'order',
      title: 'Đơn hàng đã giao thành công',
      message: 'Đơn hàng #VN123456 đã được giao thành công. Cảm ơn bạn đã mua sắm!',
      time: '10 phút trước',
      isRead: false,
      iconName: 'package-variant-closed',
      iconType: 'MaterialCommunityIcons',
    },
    {
      id: '2',
      type: 'promo',
      title: 'Khuyến mãi đặc biệt',
      message: 'Giảm giá 50% cho tất cả các mặt hàng thời trang. Chỉ còn 2 ngày!',
      time: '1 giờ trước',
      isRead: false,
      iconName: 'local-offer',
      iconType: 'MaterialIcons',
    },
    {
      id: '3',
      type: 'system',
      title: 'Cập nhật ứng dụng',
      message: 'Phiên bản 2.0 đã có sẵn với nhiều tính năng mới. Hãy cập nhật ngay!',
      time: '2 giờ trước',
      isRead: true,
      iconName: 'ios-refresh-circle',
      iconType: 'Ionicons',
    },
    {
      id: '4',
      type: 'social',
      title: 'Nguyễn Văn A đã theo dõi bạn',
      message: 'Nguyễn Văn A bắt đầu theo dõi bạn. Nhấn để xem trang cá nhân.',
      time: '1 ngày trước',
      isRead: true,
      iconName: 'user-plus',
      iconType: 'FontAwesome',
    },
    {
      id: '5',
      type: 'order',
      title: 'Đơn hàng đang vận chuyển',
      message: 'Đơn hàng #VN789012 đang được vận chuyển và dự kiến sẽ đến trong 2 ngày.',
      time: '2 ngày trước',
      isRead: true,
      iconName: 'local-shipping',
      iconType: 'MaterialIcons',
    },
  ]);

  // Đánh dấu tất cả thông báo đã đọc
  const markAllAsRead = () => {
    setNotifications(
        notifications.map(notification => ({
          ...notification,
          isRead: true,
        }))
    );
  };

  // Đánh dấu một thông báo đã đọc
  const markAsRead = (id) => {
    setNotifications(
        notifications.map(notification =>
            notification.id === id
                ? { ...notification, isRead: true }
                : notification
        )
    );
  };

  // Xóa thông báo
  const deleteNotification = (id) => {
    setNotifications(
        notifications.filter(notification => notification.id !== id)
    );
  };

  // Lấy biểu tượng và màu sắc dựa vào loại thông báo
  const getTypeStyles = (type) => {
    switch (type) {
      case 'order':
        return { color: '#4CAF50', backgroundColor: 'rgba(76, 175, 80, 0.1)' };
      case 'promo':
        return { color: '#E91E63', backgroundColor: 'rgba(233, 30, 99, 0.1)' };
      case 'system':
        return { color: '#2196F3', backgroundColor: 'rgba(33, 150, 243, 0.1)' };
      case 'social':
        return { color: '#FF9800', backgroundColor: 'rgba(255, 152, 0, 0.1)' };
      default:
        return { color: '#757575', backgroundColor: 'rgba(117, 117, 117, 0.1)' };
    }
  };

  // Render biểu tượng dựa trên loại
  const renderIcon = (item) => {
    const styles = getTypeStyles(item.type);
    const iconSize = 22;

    switch (item.iconType) {
      case 'Ionicons':
        return (
            <View style={[iconStyles.iconContainer, { backgroundColor: styles.backgroundColor }]}>
              <Ionicons name={item.iconName} size={iconSize} color={styles.color} />
            </View>
        );
      case 'MaterialIcons':
        return (
            <View style={[iconStyles.iconContainer, { backgroundColor: styles.backgroundColor }]}>
              <MaterialIcons name={item.iconName} size={iconSize} color={styles.color} />
            </View>
        );
      case 'FontAwesome':
        return (
            <View style={[iconStyles.iconContainer, { backgroundColor: styles.backgroundColor }]}>
              <FontAwesome name={item.iconName} size={iconSize} color={styles.color} />
            </View>
        );
      case 'MaterialCommunityIcons':
        return (
            <View style={[iconStyles.iconContainer, { backgroundColor: styles.backgroundColor }]}>
              <MaterialCommunityIcons name={item.iconName} size={iconSize} color={styles.color} />
            </View>
        );
      default:
        return (
            <View style={[iconStyles.iconContainer, { backgroundColor: styles.backgroundColor }]}>
              <Ionicons name="ios-notifications" size={iconSize} color={styles.color} />
            </View>
        );
    }
  };

  // Render một mục thông báo
  const renderNotificationItem = ({ item }) => (
      <TouchableOpacity
          style={[
            styles.notificationItem,
            item.isRead ? styles.readItem : styles.unreadItem,
          ]}
          onPress={() => markAsRead(item.id)}
      >
        <View style={styles.notificationContent}>
          {renderIcon(item)}

          <View style={styles.textContainer}>
            <Text style={[styles.notificationTitle, { color: getTypeStyles(item.type).color }]}>
              {item.title}
            </Text>
            <Text style={styles.notificationMessage} numberOfLines={2}>
              {item.message}
            </Text>
            <Text style={styles.notificationTime}>
              {item.time}
            </Text>
          </View>

          <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteNotification(item.id)}
          >
            <Ionicons name="close" size={18} color="#888888" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
  );

  // Đếm số thông báo chưa đọc
  const unreadCount = notifications.filter(item => !item.isRead).length;

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Thông báo</Text>
          {unreadCount > 0 && (
              <TouchableOpacity style={styles.markAllButton} onPress={markAllAsRead}>
                <Text style={styles.markAllText}>Đánh dấu tất cả đã đọc</Text>
              </TouchableOpacity>
          )}
        </View>

        {notifications.length > 0 ? (
            <FlatList
                data={notifications}
                renderItem={renderNotificationItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.notificationsList}
            />
        ) : (
            <View style={styles.emptyContainer}>
              <MaterialCommunityIcons name="bell-off-outline" size={80} color="#CCCCCC" />
              <Text style={styles.emptyText}>Không có thông báo nào</Text>
            </View>
        )}
      </SafeAreaView>
  );
};

const iconStyles = StyleSheet.create({
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  markAllButton: {
    padding: 4,
  },
  markAllText: {
    color: '#2196F3',
    fontSize: 14,
  },
  notificationsList: {
    paddingVertical: 8,
  },
  notificationItem: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  readItem: {
    opacity: 0.8,
  },
  unreadItem: {
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  notificationContent: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 6,
  },
  notificationTime: {
    fontSize: 12,
    color: '#888888',
  },
  deleteButton: {
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyText: {
    fontSize: 16,
    color: '#888888',
    marginTop: 16,
  },
});

export default NotificationsScreen;