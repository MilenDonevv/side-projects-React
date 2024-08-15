import { Button, Flex, Heading } from "@chakra-ui/react";
import Summary from "../summary/summary";
import ExpenseView from "../expense-view/expense";


export default function Main() {
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
                    bg={'blue.300'}
                    color={'black'}
                    ml={'4'}
                    mt={['4', '4', '0', '0']}
                >
                    Add New Transaction
                </Button>
            </Flex>
            <Summary mb={8} />
            <Flex
                w={'full'}
                alignItems={"flex-start"}
                justifyContent={"space-between"}
                flexDirection={['column', 'column', 'row', 'row']}
                gap={4}
            >
                <ExpenseView />
                <ExpenseView />
            </Flex>
        </Flex>
    );
}
