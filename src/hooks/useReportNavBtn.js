import { useNavigate } from 'react-router';

export const useReportNavBtn = () => {
  const navigate = useNavigate();

  const navigateOnClickExpens = (activeSheet) => {
    if (activeSheet === 'expenses') {
      return;
    }
    return navigate('/reports/expenses', { replace: true });
  };

  const navigateOnClickincomes = (activeSheet) => {
    if (activeSheet === 'incomes') {
      return;
    }
    return navigate('/reports/incomes', { replace: true });
  };

  return { navigateOnClickExpens, navigateOnClickincomes };
};
