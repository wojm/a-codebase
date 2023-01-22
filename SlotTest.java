import org.junit.Test;
import static org.junit.Assert.assertEquals;

import Slot;

public class SlotTest {

    @Test
    public void testSlotView() throws Exception {
        Slot slot = new Slot();

        assertEquals(slot.view(), '|_|');
    }

}
