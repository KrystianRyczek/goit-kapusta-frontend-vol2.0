import { useNavigate } from 'react-router';

export const useReportNavBtn = () => {
  const navigate = useNavigate();

  const navigateOnClickExpens = (activeSheet) => {
    if (activeSheet === 'expenses') {
      return;
    }
    return navigate('/transaction/reports/expenses', { replace: true });
  };

  const navigateOnClickincomes = (activeSheet) => {
    if (activeSheet === 'incomes') {
      return;
    }
    return navigate('/transaction/reports/incomes', { replace: true });
  };

  return { navigateOnClickExpens, navigateOnClickincomes };
};
