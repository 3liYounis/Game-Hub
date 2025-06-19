import { Select, Portal, Text, createListCollection } from "@chakra-ui/react";
interface Order {
    label: string,
    value: string
}
interface Props {
    onSelectOrder: (sortOrder: string | null) => void;
}
const data = {
    items: [
        { label: "Name", value: "name" },
        { label: "Rating", value: "-rating" },
        { label: "Relevance", value: "" },
        { label: "Date Added", value: "-added" },
        { label: "Popularity", value: "-metacritic" },
        { label: "Release Date", value: "-released" },
    ]
};
const SortDropDown = ({ onSelectOrder }: Props) => {
    const orders = createListCollection(data);
    return (
        <Select.Root collection={orders} variant="subtle" size="lg" width="200px" fontFamily="monospace" color="ActiveBorder" paddingX={2} marginBottom={5}>
            <Select.HiddenSelect />
            <Select.Control>
                <Select.Trigger>
                    <Select.ValueText placeholder="Order By" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                    <Select.ClearTrigger onClick={() => onSelectOrder(null)} />
                    <Select.Indicator />
                </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
                <Select.Positioner>
                    <Select.Content maxHeight={170}>
                        {orders.items.map((order: Order) => (
                            <Select.Item item={order} key={order.value} onClick={() => onSelectOrder(order.value)}>
                                <Text >{order.label}</Text>
                                <Select.ItemIndicator />
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root >
    )
}

export default SortDropDown;