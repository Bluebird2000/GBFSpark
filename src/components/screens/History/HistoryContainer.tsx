import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import History from './History';

export default function HistoryContainer() {
  const [history, setHistory] = useState<any[]>([]);

  const loadHistory = useCallback(async () => {
    try {
      const stored = await AsyncStorage.getItem('game_history');
      if (stored) {
        setHistory(JSON.parse(stored));
      }
    } catch (err) {
      console.warn('Unable to load game history', err);
    }
  }, []);

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  return <History history={history} />;
}
