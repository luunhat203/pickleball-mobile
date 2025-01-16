import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NotificationScreen = () => {
  const [activeTab, setActiveTab] = useState('promotions');

  const tabs = [
    { id: 'promotions', label: 'Khuyến mãi' },
    { id: 'events', label: 'Sự kiện' },
  ];

  const notifications = [
    {
      id: 1,
      type: 'cancel',
      title: 'Xác nhận huỷ vé',
      message: 'Giữ chỗ số BD1J9D834K4 của bạn đã bị huỷ do quá 10 phút. Vui lòng liên hệ tổng đài 19006763 để được hỗ trợ...',
      tab: 'events'
    },
    {
      id: 2,
      type: 'cancel',
      title: 'Xác nhận huỷ vé',
      message: 'Giữ chỗ số BD154X96DDR của bạn đã bị huỷ do quá 10 phút. Vui lòng liên hệ tổng đài 19006763 để được hỗ trợ...',
      tab: 'events'
    },
    {
      id: 3,
      type: 'cancel',
      title: 'Xác nhận huỷ vé',
      message: 'Giữ chỗ số BD19W67GXMP của bạn đã bị huỷ do quá 10 phút. Vui lòng liên hệ tổng đài 19006763 để được hỗ trợ...',
      tab: 'events'
    },
    {
      id: 4,
      type: 'cancel',
      title: 'Xác nhận huỷ vé',
      message: 'Giữ chỗ số BD1ELP53EP9 của bạn đã bị huỷ do quá 10 phút. Vui lòng liên hệ tổng đài 19006763 để được hỗ trợ...',
      tab: 'events'
    },
    {
      id: 5,
      type: 'info',
      title: 'Thông tin hoá đơn điện tử chuyến đi ngày 30/12/2024',
      message: 'Quý khách vui lòng tra cứu hoá đơn điện tử tại trang web:',
      tab: 'events'
    },
    {
      id: 6,
      type: 'points',
      title: 'Tặng điểm cho vé: VG12R6BQ245RW',
      message: 'Bạn đã được cộng 8.000 điểm. Phần vé đã được sử dụng điểm',
      tab: 'promotions'
    },
    {
      id: 7,
      type: 'upcoming',
      title: 'Sắp tới giờ khởi hành',
      message: 'Chuyến đi của Quý khách sẽ khởi hành lúc 22:00 30/12. Xe 29F-02322 (SĐT 0988018989). Tại...',
      tab: 'events'
    },
    {
      id: 8,
      type: 'upcoming',
      title: 'Sắp tới giờ khởi hành',
      message: 'Chuyến đi của Quý khách sẽ khởi hành lúc 22:00. Xe 29F-02322 (SĐT 0988018989). Tại...',
      tab: 'events'
    },
    {
      id: 9,
      type: 'success',
      title: 'Đặt xe thành công',
      message: 'Chuyến đi của Quý khách đến hàng số BG1G7KRRP4N. Tuyến Mỹ Đình - Sơn La Khởi hành lúc 22:00 ngày 30-12-2024...',
      tab: 'events'
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'cancel':
        return 'cancel';
      case 'info':
        return 'info';
      case 'points':
        return 'star';
      case 'upcoming':
        return 'directions-bus';
      case 'success':
        return 'check-circle';
      default:
        return 'notifications';
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case 'cancel':
        return '#e74c3c';
      case 'success':
        return '#2ecc71';
      case 'points':
        return '#f1c40f';
      default:
        return '#3498db';
    }
  };

  const filteredNotifications = notifications.filter(
    (notification) => notification.tab === activeTab
  );

  return (
    <View style={styles.container}>
      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tab,
              activeTab === tab.id && styles.activeTab
            ]}
            onPress={() => setActiveTab(tab.id)}
          >
            <Text style={[
              styles.tabText,
              activeTab === tab.id && styles.activeTabText
            ]}>
              {tab.label}
            </Text>
            {activeTab === tab.id && <View style={styles.activeTabIndicator} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.notificationsList}>
        {filteredNotifications.map((notification) => (
          <View key={notification.id} style={styles.notificationItem}>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name={getIcon(notification.type)}
                size={24}
                color={getIconColor(notification.type)}
              />
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{notification.title}</Text>
              <Text style={styles.message}>{notification.message}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    position: 'relative',
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  tabText: {
    fontSize: 14,
    color: '#7f8c8d',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#f39c12',
    fontWeight: 'bold',
  },
  activeTabIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#f39c12',
  },
  notificationsList: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconContainer: {
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
  },
});

export default NotificationScreen;
