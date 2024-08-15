import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Summary from "../summary/summary";
import ExpenseView from "../expense-view/expense";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/context";


export default function Main() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const {totalExpense, setTotalExpense, totalIncome, setTotalIncome, allTransactions, setAllTransaction} = useContext(GlobalContext);

    useEffect(() => {
        let income = 0;
        let expense = 0;

        allTransactions.forEach(item => {
            item.type === 'income' ? income += parseFloat(item.amount) : expense += parseFloat(item.amount);
        })

        setTotalIncome(income);
        setTotalExpense(expense);

    },[allTransactions])

    return (
        <Flex
            textAlign={'center'}
            flexDirection={'column'}
            pr={'5'}
            pl={'5'}
            w="full"
            alignItems="center"
        >
            <Flex
                w="full"
                alignItems={'center'}
                justifyContent={'space-between'}
                mt={'12'}
                mb={'8'}
                flexDirection={['column', 'column', 'row', 'row']}
            >
                <Heading color={'blue.400'} mb={['4', '4', '0', '0']}>
                    Expense Tracker
                </Heading>
                <Button
                    onClick={onOpen}
                    bg={'blue.300'}
                    color={'black'}
                    ml={'4'}
                    mt={['4', '4', '0', '0']}
                >
                    Add New Transaction
                </Button>
            </Flex>
            <Summary totalExpense={totalExpense} totalIncome={totalIncome} isOpen={isOpen} onClose={onClose} mb={8} />
            <Flex
                w={'full'}
                alignItems={"flex-start"}
                justifyContent={"space-between"}
                flexDirection={['column', 'column', 'row', 'row']}
                gap={4}
            >
                <ExpenseView data={allTransactions.filter(item => item.type === 'income')} type={'income'} />
                <ExpenseView data={allTransactions.filter(item => item.type === 'expense')} type={'expense'} />
            </Flex>
        </Flex>
    );
}
