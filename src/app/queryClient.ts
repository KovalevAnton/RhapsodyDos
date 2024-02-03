// createSharedQueryClient.js
import { QueryClient } from '@tanstack/react-query';

// Создаем и экспортируем функцию для создания QueryClient
export const createSharedQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // Данные считаются актуальными 5 минут
        retry: 2, // Попытки повторного запроса при неудаче (по умолчанию)
      },
    },
  });
};
